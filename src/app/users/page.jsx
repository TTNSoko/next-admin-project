"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/typography/h3";
import { UsersTable } from "./table";
import { UserCreateDialog } from "./user-create-dialog";
import { useEffect, useState } from "react";

const Users = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const [data, setData] = useState([]);

  const [list, setList] = useState(10);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const readMore = () => {
    if (data.length !== list) {
      setList(list + 10);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <TypographyH3>Хэрэглэгчид</TypographyH3>
            <Button variant="outline" onClick={() => setCreateModalOpen(true)}>
              Шинээр нэмэх
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <UsersTable data={data} list={list} />
          {list < data.length && (
            <div className=" p-8 flex justify-center">
              <button onClick={readMore} variant="outline">
                Read More...
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      <UserCreateDialog open={createModalOpen} onClose={setCreateModalOpen} />
    </div>
  );
};

export default Users;