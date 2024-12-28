"use server";

import { getUserByEmail, sendEmailOTP } from "./queries";
import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";

const DEFAULT_AVATAR_URL = "https://www.svgrepo.com/show/30132/avatar.svg";

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);

  // if (existingUser) {
  //   throw new Error("User already exist");
  // }

  const accountId = await sendEmailOTP(email);
  if (!accountId) throw new Error("Failed to send email OTP");

  if (!existingUser) {
    try {
      const { databases } = await createAdminClient();
      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        ID.unique(),
        {
          fullName,
          email,
          avatar: DEFAULT_AVATAR_URL,
          accountId,
        }
      );
    } catch (error) {
      console.error("Error creating user document:", error);
      throw new Error("Failed to create user document");
    }
  }
  return parseStringify(accountId);
};

export const verifySecret = async ({
  accountId,
  password,
}: {
  accountId: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createSession(accountId, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(session.$id);
    
  } catch (error) {
    console.log("Failed to verify OTP", error);
  }
};
