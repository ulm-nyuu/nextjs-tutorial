export default async function Slug({
    params,
}: {
    params: Promise<{ slug: string[]}>
}) {
    const { slug } = await params;
    if(slug?.length === 1) return <h1>Viewing Docs for Feature {slug[0]}</h1>
    if(slug?.length === 2) return <h1>Viewing Docs for Feature {slug[0]} and concept {slug[1]}</h1>
    return <h1>Slug</h1>;
}