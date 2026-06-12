import { Image, Sparkles } from "lucide-react";
import { useState } from "react";

const styleOptions = ["Realistic", "Ghibli Style",'Anime Style', 'Cartoon', 'Fantasy','3D Style','Portrait'];
const GenerateImages = () => {
  const [styleSelected, setStyleSelected] = useState(styleOptions[0]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  const [input, setInput] = useState("");
  const [publish,setPublish] = useState(false)
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Col 1 */}
      <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00AD25]" />
          <h1 className="font-semibold text-lg">AI Image Generator</h1>
        </div>
        <h2 className="mt-6 text-sm font-medium">Describe Your Image</h2>
        <textarea
          row={4}
          onChange = {(e)=> setInput(e.target.value)}
          value = {input}
          placeholder="Describe how you want your image"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
        />
        <h2 className="mt-4 text-sm font-medium">Style</h2>
        <div className="flex flex-wrap gap-3 mt-3 sm:max-w-9/11">
          {
            styleOptions.map((style)=>(
              <span key={style} 
              onClick={()=>setStyleSelected(style)}
              className={`px-4 py-1 text-xs rounded-full border cursor-pointer ${styleSelected === style ? 'bg-green-50 text-green-700':'border-gray-300 text-gray-500'}`}>{style}</span>
            ))
          }
        </div>
        <div className="my-6 flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input type='checkbox'
            onChange={(e)=>setPublish(e.target.checked)}
            checked={publish} className="sr-only peer"/>
            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
            <div className="absolute left-1 top-1 h-3 w-3 bg-white rounded-full transition peer-checked:translate-x-4"></div>
          </label>
          <p>Make this image public</p>
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Image className="w-5"/>
          Generate Image</button>
      </form>
      {/* Col 2 */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#8E37EB]"/>
          <h1 className="text-sl font-semibold">Generated Images</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Image className="w-9 h-9"/>
            <p>Describe and click "Generate Image" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
