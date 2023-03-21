import type { SidebarConfig } from '@vuepress/theme-default'
import { fronKnowledgeSidebar } from './sidebars/fronKnowledgeSidebar'
import { interviewSidebar } from './sidebars/interviewSidebar'
import { javaSidebar } from './sidebars/javaSidebar'
import { cssNotesSidebar } from './sidebars/cssNotesSidebar'
import { vueNotesSidebar } from './sidebars/vueNotesSidebar'
import {uniappNotesSidebar} from './sidebars/uniappNotesSidebar'
import { vueSidebar } from './sidebars/vueSidebar'
import { scaffoldSidebar } from './sidebars/scaffoldSidebar'

export const sidebar: SidebarConfig = {
  '/java/': javaSidebar,
  '/vue/': vueSidebar,
  '/fronKnowledge/': fronKnowledgeSidebar,
  '/cssNotes/': cssNotesSidebar,
  '/vueNotes/': vueNotesSidebar,
  '/uniappNotes/': uniappNotesSidebar,
  '/interview': interviewSidebar,
  '/scaffold/': scaffoldSidebar
}
