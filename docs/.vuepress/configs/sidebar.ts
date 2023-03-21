import type { SidebarConfig } from '@vuepress/theme-default'
import { fronKnowledgeSidebar } from './sidebars/fronKnowledgeSidebar'
import { interviewSidebar } from './sidebars/interviewSidebar'
import { javaSidebar } from './sidebars/javaSidebar'
import { vueSidebar } from './sidebars/vueSidebar'
import { scaffoldSidebar } from './sidebars/scaffoldSidebar'
import { cssNotesSidebar } from './sidebars/cssNotesSidebar'
import { vueNotesSidebar } from './sidebars/vueNotesSidebar'
import { uniappNotesSidebar } from './sidebars/uniappNotesSidebar'
import { jsNotesSidebar } from './sidebars/jsNotesSidebar'
import { miniProgramNotesSidebar } from './sidebars/miniProgramNotesSidebar'
import { viteNotesSidebar} from './sidebars/viteNotesSidebar'
import { httpNotesSidebar } from './sidebars/httpNotesSidebar'
import { webstormNotesSidebar } from './sidebars/webstormNotesSidebar'
import { eslintNotesSidebar } from './sidebars/eslintNotesSidebar'
import { androidNotesSidebar } from './sidebars/androidNotesSidebar'
import { vuepressNotesSidebar } from './sidebars/vuepressNotesSidebar'
import { springBootNotesSidebar } from './sidebars/springBootNotesSidebar'

export const sidebar: SidebarConfig = {
  '/java/': javaSidebar,
  '/vue/': vueSidebar,
  '/fronKnowledge/': fronKnowledgeSidebar,
  '/interview': interviewSidebar,
  '/scaffold/': scaffoldSidebar,
  '/cssNotes/': cssNotesSidebar,
  '/vueNotes/': vueNotesSidebar,
  '/uniappNotes/': uniappNotesSidebar,
  '/jsNotes/': jsNotesSidebar,
  '/miniProgramNotes/': miniProgramNotesSidebar,
  '/viteNotes/': viteNotesSidebar,
  '/httpNotes/': httpNotesSidebar,
  '/webstormNotes/': webstormNotesSidebar,
  '/eslintNotes/': eslintNotesSidebar,
  '/androidNotes/': androidNotesSidebar,
  '/vuepressNotes/': vuepressNotesSidebar,
  '/springBootNotes/': springBootNotesSidebar
}
