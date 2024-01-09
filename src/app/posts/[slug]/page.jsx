import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';

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
                <div className="my-12 text-left">
                    <h1 className="text-3xl">{post.data.title}</h1>
                    <p className="mt-2 text-left">{post.data.date}</p>
                </div>

                <div className="prose font-light text-left">
                    <Markdown options={{
						wrapper: 'article',
					}}>{post.content}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default PostPage;
