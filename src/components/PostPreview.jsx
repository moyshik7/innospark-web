/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Inset } from '@radix-ui/themes';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
/*
const PostPreview = (props) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};
*/
const PostPreview = (props) => {
    return (
        <Link href={`/posts/${props.slug}`} key={props.slug} className="h-full">
            <Card>
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src={props.image}
                        alt="Bold typography"
						className="w-full object-cover block rounded-t-lg"
                    />
                </Inset>
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-2xl hover:underline">{props.title}</h2>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <p className="mb-5 text-lg">{props.subtitle}</p>
						<p className="text-sm">{props.date}</p>
                    </CardDescription>
                    <CardFooter>
                        
                    </CardFooter>
                </CardContent>
            </Card>
        </Link>
    );
};

export default PostPreview;
