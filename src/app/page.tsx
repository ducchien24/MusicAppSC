import MainSlider from "@/components/main/main.slider";
import { sendRequest } from "@/utils/api";
import Container from "@mui/material/Container";
export default async function HomePage() {
  const resChill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/tracks/top`,
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  });
  const resWorkout = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/tracks/top`,
    method: "POST",
    body: { category: "WORKOUT", limit: 10 },
  });
  const resParty = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/tracks/top`,
    method: "POST",
    body: { category: "PARTY", limit: 10 },
  });
  // console.log("Checkres>>", resParty);
  return (
    <div>
      {/* <MainSlider data={resChill?.data ? resChill.data : []}></MainSlider> */}
      <Container>
        <MainSlider title="Chill" data={resChill?.data ?? []}></MainSlider>
        <MainSlider title="Workout" data={resWorkout?.data ?? []}></MainSlider>
        <MainSlider title="Party" data={resParty?.data ?? []}></MainSlider>
      </Container>
    </div>
  );
}
