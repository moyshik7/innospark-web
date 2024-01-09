import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';

const BlogPage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (<>
		<div className="w-full p-3 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:1/5 h-full">
			<PostPreview key={post.slug} {...post} />
		</div>
	</>));

    return (
        <div className="mt-16 lg:mt-32">
            <div className="flex flex-row flex-wrap justify-stretch items-stretch">
                {postPreviews}
            </div>
        </div>
    );
};

export default BlogPage;
//<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-52">{postPreviews}</div>
