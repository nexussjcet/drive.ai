import { getGoogleDriveFile } from "../_actions";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getGoogleDriveFile(params.id);
  return (
    <>
      <div className="h-56 w-full overflow-hidden">
        <iframe
          src={`https://drive.google.com/file/d/${params.id}/preview`}
          width="100%"
          height="100%"
          className="border-none"
        ></iframe>
      </div>
      <pre>
        {data ? (
          JSON.stringify(data, null, 2)
        ) : (
          <span className="text-red-500">Error fetching file data</span>
        )}
      </pre>
    </>
  );
}
