// markdown editor
import '@mdxeditor/editor/style.css'
import { MDXEditor } from '@mdxeditor/editor/MDXEditor'
import { headingsPlugin } from '@mdxeditor/editor/plugins/headings'
import { listsPlugin } from '@mdxeditor/editor/plugins/lists'
import { quotePlugin } from '@mdxeditor/editor/plugins/quote'
import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break'
//markdown toolbar
import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo'
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles'
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'
import { BlockTypeSelect, MDXEditorMethods } from "@mdxeditor/editor"

export default function Editor({
    update,
    indhold
}: {
    update: (e: string) => void,
    indhold: string
}) {
  return (
        <MDXEditor 
        onChange={(e) => {
            update(e)
        }}
        className="border-brand-red border-2"
        markdown={indhold} 
        plugins={[
            headingsPlugin(), 
            listsPlugin(), 
            quotePlugin(), 
            thematicBreakPlugin(),
            toolbarPlugin({
                toolbarContents: () => (<> 
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <BlockTypeSelect />
                </>)
                })
                
        ]} 
        />
  )
}
