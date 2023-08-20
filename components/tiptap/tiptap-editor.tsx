import { Editor } from "@tiptap/core";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import "./styles.scss";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  Bold,
  ChevronDown,
  Image,
  Italic,
  Link,
  Table,
  Underline,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TiptapEditor({ content }: { content: string }) {
  const [position, setPosition] = React.useState("Paragraph");
  const [size, setSize] = React.useState("16");
  const MenuBar = ({ editor }: { editor: Editor }) => {
    if (!editor) {
      return null;
    }

    return (
      <div className="flex items-center py-4 border-t border-b gap-7 border-white/10">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="justify-between w-36">
                {position}
                <ChevronDown className="w-5 h-5 ml-2 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Element Tag</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem
                  value="Heading 1"
                  className={`${
                    editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                  } text-2xl`}
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                >
                  Heading 1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Heading 2"
                  className={`${
                    editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                  } text-xl`}
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  Heading 2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Heading 3"
                  className={`${
                    editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                  } text-lg`}
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                >
                  Heading 3
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Paragraph"
                  className={`${
                    editor.isActive("paragraph") ? "is-active" : ""
                  } text-base`}
                  onClick={() => editor.chain().focus().setParagraph().run()}
                >
                  Paragraph
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="justify-between w-20">
                {size}
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Text Size</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={size} onValueChange={setSize}>
                <DropdownMenuRadioItem value="16">16</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="14">14</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="12">12</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Button variant={"ghost"} size={"icon"}>
            <Bold className="w-5 h-5" />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <Italic className="w-5 h-5" />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <Underline className="w-5 h-5" />
          </Button>
        </div>
        <div>
          <Button variant={"ghost"} size={"icon"}>
            {
              //eslint-disable-next-line jsx-a11y/alt-text
              <Image className="w-5 h-5" />
            }
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <Link className="w-5 h-5" />
          </Button>
        </div>
        <Button variant={"ghost"} size={"icon"}>
          <Table className="w-5 h-5" />
        </Button>
      </div>
    );
  };

  const editor = useEditor({
    extensions: [StarterKit, Highlight],
    editorProps: {
      attributes: {
        class: "focus:outline outline-1 p-4 outline-indigo-600 rounded-sm",
        spellcheck: "false",
        suppressContentEditableWarning: "true",
      },
    },
    content,
  });

  return (
    <div>
      <MenuBar editor={editor!} />
      <EditorContent editor={editor} className="pt-8" />
    </div>
  );
}
