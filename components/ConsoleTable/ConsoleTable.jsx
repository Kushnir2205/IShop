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
    // renderTopToolbar: ({ table }) => {
    //   const handleDeactivate = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("deactivating " + row.getValue("name"));
    //     });
    //   };

    //   const handleActivate = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("activating " + row.getValue("name"));
    //     });
    //   };

    //   const handleContact = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("contact " + row.getValue("name"));
    //     });
    //   };

    //   return (
    //     <Box
    //       sx={(theme) => ({
    //         backgroundColor: lighten(theme.palette.background.default, 0.05),
    //         display: "flex",
    //         gap: "0.5rem",
    //         p: "8px",
    //         justifyContent: "space-between",
    //       })}
    //     >
    //       <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
    //         {/* import MRT sub-components */}
    //         <MRT_GlobalFilterTextField table={table} />
    //         <MRT_ToggleFiltersButton table={table} />
    //       </Box>
    //       <Box>
    //         <Box sx={{ display: "flex", gap: "0.5rem" }}>
    //           <Button
    //             color="error"
    //             disabled={!table.getIsSomeRowsSelected()}
    //             onClick={handleDeactivate}
    //             variant="contained"
    //           >
    //             Deactivate
    //           </Button>
    //           <Button
    //             color="success"
    //             disabled={!table.getIsSomeRowsSelected()}
    //             onClick={handleActivate}
    //             variant="contained"
    //           >
    //             Activate
    //           </Button>
    //           <Button
    //             color="info"
    //             disabled={!table.getIsSomeRowsSelected()}
    //             onClick={handleContact}
    //             variant="contained"
    //           >
    //             Contact
    //           </Button>
    //         </Box>
    //       </Box>
    //     </Box>
    //   );
    // },
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
