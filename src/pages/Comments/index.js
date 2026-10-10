import React from "react";
import UseFetch from "../../hooks/UseFetch";
import Loading from "../../components/Loading";

function Comments() {
    const {data, loading, error} = UseFetch('https://jsonplaceholder.typicode.com/comments');
    if(loading) return <Loading/>;
    return ( 
        <div className="bg-yellow-200 min-h-screen p-6">
            <h1 className="text-4xl font-bold tracking-tighter text-center mb-6">Comments Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {data?.map((comment) => (
                    <div key={comment.id} className="bg-white p-4 rounded shadow">
                        <h2 className="font-bold">{comment.name}</h2>
                        <p className="text-sm text-gray-600">{comment.email}</p>
                        <p className="text-lg">{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Comments;