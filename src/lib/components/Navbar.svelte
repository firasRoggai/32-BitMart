<script lang="ts">
    // imports
    import IoIosMenu from "svelte-icons/io/IoIosMenu.svelte";

    const navbarItems = [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "Profile", href: "/profile/firas" },
        { id: 3, name: "Create", href: "/create" },
        { id: 4, name: "About", href: "/about" },
    ];

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;

        // to prevent scrolling
        if (menuOpen) {
            window.document.body.style.overflow = "hidden";
        } else {
            window.document.body.style.overflow = "auto";
        }
    }
</script>

<nav
    class="bg-[#212221] text-white h-[12vh] md:h-[10vh] flex justify-between items-center px-7"
>
    <h1 class="font-bold text-xl">
        <a href="/"> 32-BitMart </a>
    </h1>
    <ul class="hidden md:flex">
        {#each navbarItems as item (item.id)}
            <li class="px-2">
                <a href={item.href}>
                    {item.name}
                </a>
            </li>
        {/each}
    </ul>
    <div class="w-[30px] md:hidden">
        <button on:click={toggleMenu}>
            <IoIosMenu />
        </button>
    </div>
</nav>
{#if menuOpen}
    <div class="fixed h-[88vh] w-full px-1 bg-zinc-200">
        <h1 class="font-bold text-3xl underline pt-5">Menu:</h1>
        <ul class="py-4">
            {#each navbarItems as item (item.id)}
                <li class="px-2 py-6 text-xl border-b-2 border-black">
                    <a on:click={toggleMenu} href={item.href}>
                        {item.name}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
{/if}
