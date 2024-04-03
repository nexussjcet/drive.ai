// import { getSpecificFile } from "../_actions";

export default async function Page({ params }: { params: { id: string } }) {
  //   const getFile = await getSpecificFile(params.id);
  return (
    <div className="h-[50vh] w-[50vw] overflow-hidden">
      <iframe
        src={`https://drive.google.com/file/d/${params.id}/preview`}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
