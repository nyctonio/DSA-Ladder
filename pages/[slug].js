import { useRouter } from "next/router";
import Content from "/components/content"

const customQuestion = () => {
    const router = useRouter();
    const slug = router.query.slug;
    return (
        <Content name={slug} />
    );
}

export default customQuestion;