"use client";

import * as React from "react";

import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Settings } from "lucide-react";
import { useState } from "react";

export function UsersTable(props) {
  const { data, list, remove } = props;
  const [finder, setFinder] = useState("");
  console.log(data)

  const findAcc = data.filter((item) => {
    return (
      item.firstname.toLowerCase().includes(finder.toLowerCase()) ||
      item.lastname.toLowerCase().includes(finder.toLowerCase()) ||
      item.email.toLowerCase().includes(finder.toLowerCase())
    );
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          type="text"
          placeholder="Нэрээр хайх..."
          className="max-w-sm"
          value={finder}
          onChange={(e) => setFinder(e.target.value)}
        />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1">#</TableHead>
              <TableHead className="w-1">Зураг</TableHead>
              <TableHead className="w-1">Овог</TableHead>
              <TableHead>Нэр</TableHead>
              <TableHead>И-Мэйл</TableHead>
              <TableHead className="w-1">
                <Settings />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {findAcc?.slice(0, list).map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableHead>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={item.imageUrl} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableHead>
                <TableHead>{item.firstname} </TableHead>
                <TableHead>{item.lastname}</TableHead>
                <TableHead>{item.email} </TableHead>
                <TableHead className="w-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-8 h-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() =>
                          navigator.clipboard.writeText(item.email)
                        }
                      >
                        Copy Email
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => remove(item.id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
