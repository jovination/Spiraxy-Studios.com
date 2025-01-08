import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'


function GetStartedButton() {
    return (
    <Button
      className="px-1  w-full max-w-md h-[48px]  bg-[#424242] hover:bg-[#4a4a4a] rounded-xl text-white  overflow-hidden"
    >
      <div className="flex items-center justify-between w-full">
        <span className=" ml-4 text font-medium">Claim Your Free Website</span>
        <div className="rounded-xl bg-[#FF4D00] w-[40px] h-[40px] flex items-center justify-center transition-transform">
          <ArrowRight className="h-6 w-6" />
        </div>
      </div>
    </Button>
  )
}

export default GetStartedButton;
