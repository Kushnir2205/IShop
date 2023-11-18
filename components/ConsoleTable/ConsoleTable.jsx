"use client";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import Image from "next/image";
import { useMemo } from "react";
import ActionBtn from "../UI/ActionBtn/ActionBtn";
import s from "./ConsoleTable.module.css";

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
        accessorKey: "poster",
        header: "Photo",
        size: 150,
        Cell: ({ renderedCellValue, row }) => (
          <Image
            alt={row.original.name}
            height={65}
            width={100}
            src={row.original.poster[0]}
            loading="lazy"
            style={{ borderRadius: "20%" }}
          />
        ),
      },
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
    // renderRowActionMenuItems: ({ closeMenu }) => [
    //   <MenuItem
    //     key={0}
    //     onClick={() => {
    //       // View profile logic...
    //       closeMenu();
    //     }}
    //     sx={{ m: 0 }}
    //   >
    //     <ListItemIcon>
    //       <AccountCircle />
    //     </ListItemIcon>
    //     View Profile
    //   </MenuItem>,
    //   <MenuItem
    //     key={1}
    //     onClick={() => {
    //       // Send email logic...
    //       closeMenu();
    //     }}
    //     sx={{ m: 0 }}
    //   >
    //     <ListItemIcon>
    //       <Send />
    //     </ListItemIcon>
    //     Send Email
    //   </MenuItem>,
    // ],
    renderTopToolbarCustomActions: ({ table }) => {
      const handleDelete = () => {
        console.log("Delete Item");
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
