<template>
    <div class="app-wrapper">
        
    </div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, onMounted, computed, ref, onUnmounted } from 'vue'
import Sidebar from './componets/Sidebar/index.vue'

export default defineComponent({
    name: 'SidebarLogo',
    components: {
        Sidebar
    }
})
</script>