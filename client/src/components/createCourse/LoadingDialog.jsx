import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className='p-0 bg-white flex items-center justify-center' style={{ width: "800px", height: "250px" }}>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className='flex flex-col items-center'>
              <img src={"/loader.gif"} className="w-32 h-32" />
              <h2 className="text-xl font-medium -mt-3">Please Wait...Your Course is being Created</h2>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoadingDialog;
