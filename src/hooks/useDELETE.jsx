export const useDELETE=(url,info,refetch)=>{
    const handleDelete=async ()=>{
        try {
            const response= await fetch(`${url}/${info.id}`,{
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });
            if (!response.ok) throw new Error(response.statusText);
            await response.json();
            refetch();
        } catch (error) {
            console.log(error);
        }
    }
    return { handleDelete };
}