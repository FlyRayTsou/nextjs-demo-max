export default function BlogPost({ params }) {
    return (
        <main>
            <h1>Post Title</h1>
            <p>{params.slug}</p>
        </main>
    )
}