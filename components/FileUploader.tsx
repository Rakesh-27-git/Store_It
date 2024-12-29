import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const FileUploader = ({ className }: Props) => {
  return (
    <div className="cursor-pointer">
      <Button type="button" className={cn("uploader-button", className)}>
        <Image
          src="/assets/icons/upload.svg"
          alt="upload"
          width={24}
          height={24}
        />{" "}
        <p>Upload</p>
      </Button>
    </div>
  );
};

export default FileUploader;
