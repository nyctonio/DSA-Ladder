import { useRouter } from "next/router";
import Content from "/components/content"
import Head from "next/head";
import { type } from "/data/data";

const customQuestion = () => {
    const router = useRouter();
    const slug = router.query.slug;
    const data = type;
    return (
        <div>
            <Head>
                <title>{slug}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={slug} key="ogtitle" />
                <meta property="og:description" content={`Get the best ${data[slug]}-based coding problems/questions (coding ladder) of ${slug} where difficulty increasing from top to bottom with serial number !!`} key="ogdesc" />
            </Head>
            <Content name={slug} />
        </div>
    );
}

export default customQuestion;