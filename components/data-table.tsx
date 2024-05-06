"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
/*
import { User } from "@/interfaces/user"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { useState } from "react"*/
import type { ColumnDef } from "@tanstack/react-table";
import {
  //ColumnDef,
  //SortingState,
  //VisibilityState,
  flexRender,
  getCoreRowModel,
  //getFilteredRowModel,
  //getPaginationRowModel,
  //getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData>[];
  data: TData[];
  isLoading: boolean;
}

export const DataTable = <TData, TValue>({
  columns,
  data,
  isLoading,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    columns: columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border rounded-md shadow-md w-full">
      <Table>
        <TableHeader className="bg-gray-800">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="h-9">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow key="loadingTr">
              <TableCell key="loadingTd" colSpan={columns.length}>
                Carregando...
              </TableCell>
            </TableRow>
          ) : null}

          {!isLoading &&
            table.getRowModel().rows.length > 0 &&
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-collapse border-b border-dark-50 hover:bg-gray-50"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-3 text-start">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}

          {!isLoading && table.getRowModel().rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-20 text-center">
                Nenhum registro encontrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
  /*<TableFooter className="text-xs font-light text-primary">
          <tr>
            <th colSpan={columns.length}>
              <Pagination
                table={table}
                totalElements={totalElements}
                firstRecord={firstRecord}
                lastRecord={lastRecord}
              />
            </th>
          </tr>
        </TableFooter> */
};

//npm install @tanstack/react-table
