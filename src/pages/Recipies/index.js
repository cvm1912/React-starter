import { useNavigate } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import Loading from "../../components/Loading";

function Recipies() {
    const navigate = useNavigate();
    const { data, loading, error } = UseFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <Loading />;
    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

    return (
        <div className="bg-blue-200 min-h-screen p-6">
            <h1 className="text-4xl font-bold tracking-tighter text-center mb-6">Recipes Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {data?.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded shadow">
                        <h2 className="font-bold">{item.title}</h2>
                        <p className="text-sm text-gray-600">{item.body}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Back to home
                </button>
            </div>
        </div>
    );
}

export default Recipies;
