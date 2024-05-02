"use client"
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

interface DataTableProps {
    columns: ColumnDef<unknown>[];
    data: unknown[];
}

export default function DataTable({ columns, data }: DataTableProps) {
    const table = useReactTable({
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
    /*const [sorting, setSorting] = useState<SortingState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    
    const table = useReactTable({
        data: data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })
    
    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <div className="rounded-md border">
                <table>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>))
                    }
                </table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div >
    )*/
}

//npm install @tanstack/react-table