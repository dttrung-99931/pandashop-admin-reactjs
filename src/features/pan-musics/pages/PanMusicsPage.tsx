import { Audio } from "@shared/components/Audio";
import { Button } from "@shared/components/Buttton";
import { Page } from "@shared/components/Page";
import { Table } from "@shared/components/Table";
import { showErrorToast } from "@utils/toast";
import { Edit, Trash } from "lucide-react";
import { useCallback, useState, type FC } from "react";
import type { PanMusicItemResponse } from "../dtos/response.dto";
import { useDeletePanMusic } from "../hooks/useDeletePanmusic";
import { useGetPanMusics } from "../hooks/useGetPanMusics";
import { PanMusicDetailModal } from "./PanMusicDetailModal";

interface IUsersPageProps {}

export const PanMusicsPage: FC<IUsersPageProps> = () => {
  const { data, isLoading, refetch } = useGetPanMusics({});
  const [editId, setEditId] = useState<number | undefined>(undefined);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const { handleDelete } = useDeletePanMusic({
    onError: (ex) => {
      showErrorToast(ex.message);
    },
    onSuccess: () => {
      refetch();
    },
  });

  const closeModal = useCallback(() => {
    if (editId) {
      setEditId(undefined);
    } else {
      setShowCreateModal(false);
    }
  }, [editId]);

  return (
    <>
      <Page>
        <Page.Header
          title="Pan Musics"
          actions={[
            <Button size="sm" onClick={() => setShowCreateModal(true)}>
              Create
            </Button>,
          ]}
        />

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
                flex: 8,
                renderCell: (panMusic) => <span>{panMusic.title}</span>,
                className: "text-left",
              },
              {
                title: "Duration",
                flex: 4,
                renderCell: (panMusic) => (
                  <span>{panMusic.durationInSecs}</span>
                ),
              },
              {
                title: "Play",
                flex: 1,
                renderCell: (panMusic) => <Audio src={panMusic.musicUrl} />,
              },
              {
                title: "Edit",
                flex: 1,
                renderCell: (panMusic) => (
                  <Button type="icon" onClick={() => setEditId(panMusic.id)}>
                    <Edit size={20} />
                  </Button>
                ),
              },
              {
                title: "Delete",
                flex: 1,
                renderCell: (panMusic) => (
                  <Button type="icon" onClick={() => handleDelete(panMusic)}>
                    <Trash size={20} />
                  </Button>
                ),
              },
            ]}
            data={data}
          />
        </Page.Content>
      </Page>

      {(editId || showCreateModal) && (
        <PanMusicDetailModal
          editId={editId}
          onSuccess={() => {
            refetch();
            closeModal();
          }}
          onClose={closeModal}
        ></PanMusicDetailModal>
      )}
    </>
  );
};
