import { Sheet } from "react-modal-sheet";

export default function SheetHeader() {
  return (
    <Sheet.Header>
      <div className="h-8 flex justify-center pt-2.5">
        <div className="w-[50px] h-1 bg-[#EAEAEA] rounded-full"></div>
      </div>
    </Sheet.Header>
  )
}
