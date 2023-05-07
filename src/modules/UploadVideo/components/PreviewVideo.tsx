import { FC } from "react";
import { client } from "@/utils/client";
import { useState, ChangeEvent, FC } from "react";
import { SanityAssetDocument } from "@sanity/client";
import { FaCloudUploadAlt } from "react-icons/fa";

interface PreviewVideoProps {
  videoAsset: SanityAssetDocument | null;
  setVideoAsset: (video: SanityAssetDocument) => void;
}

export const PreviewVideo: FC<PreviewVideoProps> = ({videoAsset, setVideoAsset}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isWrongFile, setIsWrongFile] = useState<boolean>(false);

  const handlerUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setIsWrongFile(false);
    const selectedFile = e.target.files![0];
    const fileTypes = ["video/mp4", "video/webm"];

    if (fileTypes.includes(selectedFile.type)) {
      client.assets
        .upload("file", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((data: SanityAssetDocument) => {
          setVideoAsset(data);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setIsWrongFile(true);
    }
  };

  return (
    <div>
      {videoAsset ? (
        <div className="border-dashed rounded-xl flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] cursor-pointer">
          <video src={videoAsset.url} loop controls className="rounded-xl w-full h-full bg-black"></video>
        </div>
      ) : (
        <div className="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
          {isLoading ? (
            <p>Uploading...</p>
          ) : (
            <label htmlFor="upload-video" className="cursor-pointer p-10">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center">
                  <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                  <p className="text-xl font-semibold">Upload video</p>
                </div>
                <p className="text-gray-400 text-center mt-10 text-sm">
                  MP4 or WebM or ogg <br />
                  720x1280 or higher <br />
                  Up to 10 minutes <br />
                  Less than 2GB
                </p>
                <div className="bg-[#f51997] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none">
                  Select file
                </div>
              </div>
              <input type="file" name="upload-video" id="upload-video" onChange={handlerUpload} className="w-0 h-0" />
            </label>
          )}
        </div>
      )}
      {isWrongFile && (
        <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[250px]">
          Please select a video file of type mp4 and webm
        </p>
      )}
    </div>
  );
};
