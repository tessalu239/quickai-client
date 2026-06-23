import { useAuth } from "@clerk/clerk-react";
import { Scissors, Sparkles } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const RemoveObject = () => {
  const [inputImage, setInputImage] = useState("");
  const [object, setObject] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (object.split(" ").length > 1) {
        return toast("Please enter ONLY ONE object");
      }
      const formData = new FormData();
      formData.append("image", inputImage);
      formData.append("object", object);

      const { data } = await axios.post("/api/ai/remove-object", formData, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setContent(data.content);
      } else {
        console.log(data.message);
        toast.error(data.message);
      }
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Col 1 */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="font-semibold text-lg">Object Removal</h1>
        </div>
        <h2 className="mt-6 text-sm font-medium">Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setInputImage(e.target.files[0])}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
        />
        <h2 className="mt-4 text-sm font-medium">Describe object to remove</h2>
        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="e.g.,car in background, tree in the image"
          required
        ></textarea>
        <p className="text-xs text-gray-500 font-light mt-1">
          Be specific about what you want to remove
        </p>

        <button
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3C81F6] to-[#9243E3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          {loading ? (
            <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <Scissors className="w-5" />
          )}
          Remove Object
        </button>
      </form>
      {/* Col 2 */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Scissors className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-sl font-semibold">Processed Image</h1>
        </div>

        {content ? (
          <div className="h-full mt-3">
            <img
              src={content}
              alt={`Object ${object} removed from Image ${inputImage}`}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <Scissors className="w-9 h-9" />
              <p>Upload an image and describe what to remove</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RemoveObject;
