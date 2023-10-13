import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from "react-syntax-highlighter"
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react'


export default function Mdx({children}: {
    children?: string
}) {
  return (
    <ReactMarkdown
        components={{
            h1: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                <h1
                  className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight"
                  {...props}
                />
              ),
              h2: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                <h2
                  className="pt-4 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0"
                  {...props}
                />
              ),
              h3: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                <h3
                  className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
                  {...props}
                />
              ),
              h4: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                <h4
                  className= "mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                  {...props}
                />
              ),
              h5: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                <h5
                  className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
                  {...props}
                />
              ),
              h6: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
                <h6
                  className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
                  {...props}
                />
              ),
              a: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLAnchorElement>) => (
                <a
                  className="font-medium underline underline-offset-4"
                  {...props}
                />
              ),
              p: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLParagraphElement>) => (
                <p
                  className="leading-7 [&:not(:first-child)]:mt-6"
                  {...props}
                />
              ),
              ul: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLUListElement>) => (
                <ul className="my-6 ml-6 list-disc" {...props} />
              ),
              ol: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLOListElement>) => (
                <ol className="my-6 ml-6 list-decimal" {...props} />
              ),
              li: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLLIElement>) => (
                <li className="mt-2" {...props} />
              ),
              blockquote: ({ className, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
                <blockquote
                  className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
                  {...props}
                />
              ),
              img: ({
                className,
                alt,
                ...props
              }: React.ImgHTMLAttributes<HTMLImageElement>) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="" alt={alt} {...props} />
              ),
              hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
              table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
                <div className="my-6 w-full overflow-y-auto">
                  <table className="w-full" {...props} />
                </div>
              ),
              tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
                <tr
                  className="m-0 border-t p-0 even:bg-muted"
                  {...props}
                />
              ),
              th: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLTableCellElement>) => (
                <th
                  className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                  {...props}
                />
              ),
              td: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLTableCellElement>) => (
                <td
                  className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                  {...props}
                />
              ),
              pre: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLPreElement>) => (
                <pre
                  className="mb-4 mt-6"
                  {...props}
                />
              ),
              code: ({ className, children, ...props }: React.HtmlHTMLAttributes<HTMLElement>) => (
                <SyntaxHighlighter 
                language={props.lang ? props.lang : "javascript"}
                style={materialOceanic}
                customStyle={{
                    borderRadius: "5px",
                    padding: "10px"
                }}
                >
                    {children as string}
                </SyntaxHighlighter>
              ),
            
        }}
    >
        {children}
    </ReactMarkdown>
  )
}
