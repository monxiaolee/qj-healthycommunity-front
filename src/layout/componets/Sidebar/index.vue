<template>
    <div :class="{ 'has-logo': showLogo }">
        <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            @select="selectMenuItem"
        >
            <el-menu-item index="Home">
                <i class="el-icon-s-home"></i>
                <template #title>主页</template>
            </el-menu-item>
            <el-submenu index="Census">
                <template #title>
                    <i class="el-icon-menu"></i>
                    数据统计
                </template>
                <el-menu-item index="Rank">
                    <i class="el-icon-pie-chart"></i>
                    <template #title>最新排名</template>
                </el-menu-item>
                <el-menu-item index="Data">
                    <i class="el-icon-postcard"></i>
                    <template #title>实时信息</template>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="About">
                <i class="el-icon-s-order"></i>
                <template #title>关于</template>
            </el-menu-item>
            <el-menu-item index="Profile">
                <i class="el-icon-user-solid"></i>
                <template #title>我的</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts">
import { defineComponent, ComputedRef, onMounted, computed, ref, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
    name: 'SideBar',
    setup(props, ctx) {
        let showLogo = true
        const route = useRoute()
        const router = useRouter()

        const defaultActive = computed(() => route.name)
        const selectMenuItem = (type: any) => {
            router.push({
                name: type
            })
        }
        onMounted(() => {

        })
        return {
            showLogo,
            defaultActive,
            selectMenuItem
        }
    }
})
</script>