import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import React from "react";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  value: string;
  setValue: (value: string) => void;
}

function Edittor(props: EditorProps) {
  return (
    <ReactQuill theme="snow" value={props.value} onChange={props.setValue} />
  );
}

export default Edittor;
