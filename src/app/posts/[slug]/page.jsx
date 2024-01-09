/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {funky as CodeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';
import "@/styles/blogpost.css"


const CodeBlock = ({className, children}) => {
    let lang = 'text'; // default monospaced text
    if (className && className.startsWith('lang-')) {
      lang = className.replace('lang-', '');
    }
    return (
      <SyntaxHighlighter language={lang} className="rounded-xl mt-14 mb-14" style={CodeStyle}>
        {children}
      </SyntaxHighlighter>
    );
  }
  
  // markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock = ({children, ...rest}) => {
    if ('type' in children && children ['type'] === 'code') {
        return CodeBlock(children['props']);
    }
    return <pre {...rest}>{children}</pre>;
};


const getPostContent = (slug) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="mt-16 mb-16 lg:mt-36 lg:mb-36 flex flex-row items-center justify-center">
            <div className="w-full pr-5 pl-5 md:pr-10 md:pl-10 xl:max-w-6xl">
                <div className="mb-20 pb-5 border-b text-left">
                    <h1 className="text-3xl">{post.data.title}</h1>
                    <img
                        src={post.data.image}
                        alt="ass"
                        className="w-full mt-20"
                    />
                    <p className="text-left text-sm">{post.data.date}</p>
                </div>

                <div className="prose font-light text-left">
                    <Markdown options={{
						wrapper: 'article',
                        overrides: {
                            pre: PreBlock,
                        },
					}}>{post.content}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default PostPage;