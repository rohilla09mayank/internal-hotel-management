import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperation() {
  const filterOptions = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "with-discount",
      label: "Discounted",
    },
    {
      value: "no-discount",
      label: "No Discount",
    },
  ];

  const sortOptions = [
    { value: "name-asc", label: "Sort by Name (A-Z)" },
    { value: "name-des", label: "Sort by Name (Z-A)" },
    { value: "regularPrice-asc", label: "Price low to high" },
    { value: "regularPrice-des", label: "Price high to low" },
    { value: "maxCapacity-asc", label: "Capacity low to high" },
    { value: "maxCapacity-des", label: "Capacity high to low" },
  ];
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />
      <SortBy options={sortOptions} />
    </TableOperations>
  );
}

export default CabinTableOperation;
