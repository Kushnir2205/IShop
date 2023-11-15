"use client";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import Image from "next/image";
import { useMemo } from "react";

const ConsoleTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "type",
        header: "Type",
        size: 150,
      },
      {
        accessorKey: "color",
        header: "Color",
        size: 150,
      },
      {
        accessorKey: "storage",
        header: "Storage",
        size: 150,
      },
      {
        accessorKey: "version",
        header: "Version",
        size: 150,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 150,
      },

      {
        accessorKey: "poster",
        header: "Photo",
        size: 150,
        Cell: ({ renderedCellValue, row }) => (
          <Image
            alt="avatar"
            height={30}
            width={30}
            src={`https://ishop-backend-5skc.onrender.com/gudgets/2023-11-15T00:42:20.024Z-892534793_iPhone-15-Pro-Review-Featured-Gear.webp`}
            loading="lazy"
            style={{ borderRadius: "50%" }}
          />
        ),
      },
      {
        accessorKey: "available",
        header: "Available",
        size: 150,
      },
      {
        accessorKey: "condition",
        header: "Condition",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default ConsoleTable;
