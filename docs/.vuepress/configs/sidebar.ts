import type { SidebarConfig } from '@vuepress/theme-default'
import { fronKnowledgeSidebar } from './sidebars/fronKnowledgeSidebar'
import { interviewSidebar } from './sidebars/interviewSidebar'
import { javaSidebar } from './sidebars/javaSidebar'
import { jsSidebar } from './sidebars/jsSidebar'
import { takeNotesSidebar } from './sidebars/takeNotesSidebar'
import { uniappSidebar } from './sidebars/uniappSidebar'
import { vueSidebar } from './sidebars/vueSidebar'

export const sidebar: SidebarConfig = {
  '/java/': javaSidebar,
  '/js/': jsSidebar,
  '/vue/': vueSidebar,
  '/uniapp/': uniappSidebar,
  '/fronKnowledge/': fronKnowledgeSidebar,
  '/takeNotes/': takeNotesSidebar,
  '/interview': interviewSidebar
}
