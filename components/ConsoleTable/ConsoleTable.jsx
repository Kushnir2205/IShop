"use client";
import { fetchDeleteItem } from "@/services/api/api";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import Image from "next/image";
import { useMemo } from "react";
import ActionBtn from "../UI/ActionBtn/ActionBtn";
import s from "./ConsoleTable.module.css";

import { FaTrash, FaEdit } from "react-icons/fa";
import { MenuItem, Box, Typography } from "@mui/material";
import Link from "next/link";
import { toast } from "react-toastify";

const ConsoleTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 50,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 50,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 50,
      },
      {
        accessorKey: "color",
        header: "Color",
        size: 50,
      },
      {
        accessorKey: "storage",
        header: "Storage",
        size: 150,
      },
      {
        accessorKey: "version",
        header: "Version",
        size: 50,
      },

      {
        accessorKey: "available",
        header: "Available",
        size: 50,
      },
      {
        accessorKey: "condition",
        header: "Condition",
        size: 50,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
    enableColumnPinning: true,
    enableRowSelection: true,
    enableRowActions: true,
    renderRowActionMenuItems: ({ closeMenu, row }) => [
      <MenuItem className={s.actionMenuItem} key={0} sx={{ m: 0 }}>
        <Link
          href={`console/edit/${row.getValue("_id")}`}
          className={s.actionMenuItemLink}
        >
          <FaEdit />
          <p>Edit</p>
        </Link>
      </MenuItem>,
      <MenuItem
        className={s.actionMenuItem}
        key={1}
        onClick={() => {
          const gudgetId = row.getValue("_id");
          fetchDeleteItem(gudgetId)
            .then(({ message }) => toast.success(message))
            .catch((e) => {
              toast.error(
                "Something went wrong, please reload the page and try again."
              );
            });
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <FaTrash />
        <p>Delete</p>
      </MenuItem>,
    ],
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        {row.original.poster.map((photo) => (
          <Image
            key={photo}
            alt={"Gudget"}
            height={100}
            width={80}
            src={photo}
            loading="lazy"
            style={{ borderRadius: "10%" }}
            className={s.gudgetPhoto}
          />
        ))}
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => {
      const handleDelete = async () => {
        const selectedId = table
          .getSelectedRowModel()
          .flatRows.map((row) => row.getValue("_id"));
        try {
          const result = await Promise.any(
            selectedId.map((gudgetId) => {
              return fetchDeleteItem(gudgetId);
            })
          );
          toast.success(result.message);
        } catch (e) {
          toast.error(
            "Something went wrong, please reload the page and try again."
          );
        }
      };

      return (
        <ul className={s.buttonList}>
          <li>
            <ActionBtn
              name={"Delete"}
              customClass={"delete"}
              func={handleDelete}
              isActive={
                table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()
              }
            />
          </li>
          <li>
            <Link href={`console/add`}>
              <ActionBtn
                name={"Add item"}
                customClass={"add"}
                isActive={true}
              />
            </Link>
          </li>
        </ul>
      );
    },
    // enableColumnFilterModes: true,
  });

  return (
    <MaterialReactTable
      table={table}
      enableRowSelection
      initialState={{ density: "compact" }}
    />
  );
};

export default ConsoleTable;
