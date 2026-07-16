import { Page } from "@shared/components/Page";
import type { FC } from "react";
import { useGetPanMusics } from "../hooks/useGetPanMusics";
import { Table } from "@shared/components/Table";
import type { PanMusicItemResponse } from "../dtos/response.dto";
import { Audio } from "@shared/components/Audio";

interface IUsersPageProps {}

export const PanMusicsPage: FC<IUsersPageProps> = () => {
  const { data, isLoading } = useGetPanMusics({});
  return (
    <Page>
      <Page.Header title="Pan Musics"></Page.Header>
      <Page.Content isLoading={isLoading} error={undefined}>
        <Table<PanMusicItemResponse>
          columns={[
            {
              title: "Id",
              flex: 2,
              renderCell: (panMusic) => <span>{panMusic.id}</span>,
            },
            {
              title: "Title",
              flex: 4,
              renderCell: (panMusic) => <span>{panMusic.title}</span>,
              className: "text-left",
            },
            {
              title: "Duration",
              flex: 2,
              renderCell: (panMusic) => <span>{panMusic.durationInSecs}</span>,
            },
            {
              title: "Play",
              flex: 1,
              renderCell: (panMusic) => <Audio src={panMusic.musicUrl} />,
            },
          ]}
          data={data}
        />
      </Page.Content>
    </Page>
  );
};
