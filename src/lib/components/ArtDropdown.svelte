<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import FaEllipsisV from "svelte-icons/fa/FaEllipsisV.svelte";
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        <button>
            <FaEllipsisV />
        </button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
        <DropdownMenu.Group>
            <!-- If owner -->
            <DropdownMenu.Item>Set Price</DropdownMenu.Item>
            <!-- If buyable -->
            <DropdownMenu.Item>Buy</DropdownMenu.Item>
            <!-- Open report modal -->
            <DropdownMenu.Item>Report</DropdownMenu.Item>
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>