import { MdDelete } from "react-icons/md";
import axios from "axios";
import { PreviewVideo } from "./PreviewVideo";

import { topics } from "@/utils/topics";
import { ChangeEvent, useState } from "react";
import { SanityAssetDocument } from "@sanity/client";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/router";

export const UploadVideo = () => {
  const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | null>(null);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState(topics[0].name);
  const [isSaving, setIsSaving] = useState(false);
  const { user } = useUserStore();
  const router = useRouter();

  const handlerPost = async () => {
    if (caption && videoAsset?._id && category) {
      setIsSaving(true);

      const document = {
        _type: "post",
        caption,
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: videoAsset._id,
          },
        },
        userId: user?._id,
        postedBy: {
          _type: "postedBy",
          _ref: user?._id,
        },
        topic: category,
      };

      await axios.post("http://localhost:3000/api/post", document);
      router.push("/");
    }
  };

  return (
    <div className="flex w-full h-full mb-10 pt-10 lg:pt-20 justify-center">
      <div className="bg-white rounded-lg flex items-center gap-6 flex-wrap">
        <div>
          <div>
            <h1 className="text-2xl font-bold text-center">Upload video</h1>
            <p className="text-md text-gray-400 mt-1 text-center">Post a video to your account</p>
          </div>
          <PreviewVideo videoAsset={videoAsset} setVideoAsset={setVideoAsset} />
        </div>
        <div className="flex flex-col gap-3 pb-10">
          <label className="text-md font-medium">Caption</label>
          <input
            type="text"
            value={caption}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCaption(e.target.value)}
            className="rounded outline-none text-md border-2 w-[250px] border-gray-200 p-2"
          />
          <label className="text-md font-medium">Choose a category</label>
          <select
            value={category}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
            className="rounded outline-none text-md border-2 w-[250px] border-gray-200 p-2 cursor-pointer"
          >
            {topics.map((topic) => (
              <option key={topic.name}>{topic.name}</option>
            ))}
          </select>
          <div className="flex gap-6 mt-10">
            <button className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none hover:bg-[#f51997] hover:border-[#f51997] hover:text-white transition-colors">
              Discard
            </button>
            <button
              onClick={handlerPost}
              className="bg-[#f51997] border-2 border-transparent text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none transition-colors hover:bg-transparent hover:text-[#f51997] hover:border-[#f51997]"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
