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
      // {
      //   accessorKey: "poster",
      //   header: "Photo",
      //   size: 150,
      //   Cell: ({ renderedCellValue, row }) => (
      //     <Image
      //       alt={row.original.name}
      //       height={65}
      //       width={100}
      //       src={row.original.poster[0]}
      //       loading="lazy"
      //       style={{ borderRadius: "20%" }}
      //     />
      //   ),
      // },
      {
        accessorKey: "type",
        header: "Type",
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
          const selectedItem = row.getValue("_id");
          fetchDeleteItem([selectedItem]);
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
          />
        ))}
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => {
      const handleDelete = () => {
        const selectedId = table
          .getSelectedRowModel()
          .flatRows.map((row) => row.getValue("_id"));
        fetchDeleteItem(selectedId);
      };
      const handleAdd = () => {
        console.log("Add Item");
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
            <ActionBtn
              name={"Add item"}
              customClass={"add"}
              func={handleAdd}
              isActive={true}
            />
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
