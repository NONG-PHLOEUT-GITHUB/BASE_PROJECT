<template>
  <v-navigation-drawer elevation="4" v-model="drawer">
    <template v-slot:prepend>
      <v-list>
        <v-list-item>
          <v-img class="image" rounded src="/logo.png" rounded-sm></v-img>
        </v-list-item>
      </v-list>
    </template>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        link
        :to="item.path"
        exact
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2 text-center">
        <v-btn
          block
          class="text-none bg-primary"
          variant="tonal"
          prepend-icon="mdi-application-outline"
        >
          Version 0.0.1
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      menu: [
        {
          path: '/admin-dashboard',
          title: "Admin Dashboard",
          icon: 'mdi-home'
        },
        {
          path: '/list-post',
          title: "Post Management",
          icon: 'mdi-home'
        },
        {
          path: '/list-user',
          title: "User Management",
          icon: 'mdi-account'
        }
      ]
    }),
    // computed: {
    //   userRole() {
    //     return parseInt(localStorage.getItem('user_role')) // set string to integer
    //   },
    //   adminMenu() {
    //     return [
    //       {
    //         path: '/admin-dashboard',
    //         title: this.$t('menu.admin.dashboard'),
    //         icon: 'mdi-home'
    //       },
    //       {
    //         path: '/guardian-list',
    //         title: this.$t('menu.admin.parents'),
    //         icon: 'mdi-human-male-female-child'
    //       },
    //       {
    //         path: '/teacher-list',
    //         title: this.$t('menu.admin.teacher'),
    //         icon: 'mdi-human-male-board-poll'
    //       },
    //       {
    //         path: '/student-list',
    //         title: this.$t('menu.admin.student'),
    //         icon: 'mdi-android-studio'
    //       },
    //       {
    //         path: '/class-list',
    //         title: this.$t('menu.admin.classroom'),
    //         icon: 'mdi-clipboard-text'
    //       }
    //     ]
    //   },
    //   teacherMenu() {
    //     return [
    //       {
    //         path: '/teacher-dashboard',
    //         title: this.$t('menu.admin.dashboard'),
    //         icon: 'mdi-home'
    //       },
    //       {
    //         path: '/student-exam',
    //         title: this.$t('menu.teacher.exam'),
    //         icon: 'mdi-chart-line-variant'
    //       },
    //       {
    //         path: '/teacher-classroom',
    //         title: this.$t('menu.teacher.classTeaching'),
    //         icon: 'mdi-domain'
    //       }
    //     ]
    //   },
    //   studentMenu() {
    //     return [
    //       {
    //         path: '/student-home',
    //         title: this.$t('menu.admin.dashboard'),
    //         icon: 'mdi-home'
    //       },
    //       {
    //         path: '/student-attendance',
    //         title: this.$t('menu.student.attendance'),
    //         icon: 'mdi-progress-check'
    //       },
    //       {
    //         path: '/student-score/view',
    //         title: this.$t('menu.student.exam'),
    //         icon: 'mdi-chart-bar'
    //       },
    //       {
    //         path: '/student-comments',
    //         title: this.$t('menu.student.comment'),
    //         icon: ' mdi-comment'
    //       }
    //     ]
    //   },
    //   menu() {
    //     switch (this.userRole) {
    //       case 1:
    //         return this.adminMenu
    //       case 2:
    //         return this.teacherMenu
    //       case 3:
    //         return this.studentMenu
    //       default:
    //         return []
    //     }
    //   }
    // },
    methods: {
      drawer() {
        return this.value
      }
    }
  }
</script>
