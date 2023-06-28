import type { SidebarConfig } from '@vuepress/theme-default'
import { frontKnowledgeSidebar } from './sidebars/frontKnowledgeSidebar'
import { javaSidebar } from './sidebars/javaSidebar'
import { vueSidebar } from './sidebars/vueSidebar'
import { scaffoldSidebar } from './sidebars/scaffoldSidebar'
import { cssNotesSidebar } from './sidebars/cssNotesSidebar'
import { vueNotesSidebar } from './sidebars/vueNotesSidebar'
import { uniappNotesSidebar } from './sidebars/uniappNotesSidebar'
import { jsNotesSidebar } from './sidebars/jsNotesSidebar'
import { typeScriptNotesSidebar } from './sidebars/typeScriptNotesSidebar'
import { miniProgramNotesSidebar } from './sidebars/miniProgramNotesSidebar'
import { viteNotesSidebar} from './sidebars/viteNotesSidebar'
import { httpNotesSidebar } from './sidebars/httpNotesSidebar'
import { jetBrainsNotesSidebar } from './sidebars/jetBrainsNotesSidebar'
import { eslintNotesSidebar } from './sidebars/eslintNotesSidebar'
import { androidNotesSidebar } from './sidebars/androidNotesSidebar'
import { vuepressNotesSidebar } from './sidebars/vuepressNotesSidebar'
import { springBootNotesSidebar } from './sidebars/springBootNotesSidebar'
import { mavenNotesSidebar } from './sidebars/mavenNotesSidebar'
import { javaNotesSidebar } from './sidebars/javaNotesSidebar'
import { jsKnowledgeSidebar } from './sidebars/jsKnowledgeSidebar'
import { cssKnowledgeSidebar } from './sidebars/cssKnowledgeSidebar'
import { vueKnowledgeSidebar } from './sidebars/vueKnowledgeSidebar'
import { webpackKnowledgeSidebar } from './sidebars/webpackKnowledgeSidebar'
import { nodeKnowledgeSidebar } from './sidebars/nodeKnowledgeSidebar'
import { browserKnowledgeSidebar } from './sidebars/browserKnowledgeSidebar'
import { javaKnowledgeSidebar } from './sidebars/javaKnowledgeSidebar'
import { mybatisKnowledgeSidebar } from './sidebars/mybatisKnowledgeSidebar'
import { dataBaseKnowledgeSidebar } from './sidebars/dataBaseKnowledgeSidebar'

export const sidebar: SidebarConfig = {
  '/java/': javaSidebar,
  '/vue/': vueSidebar,
  '/frontKnowledge/': frontKnowledgeSidebar,
  '/scaffold/': scaffoldSidebar,
  '/cssNotes/': cssNotesSidebar,
  '/vueNotes/': vueNotesSidebar,
  '/uniappNotes/': uniappNotesSidebar,
  '/jsNotes/': jsNotesSidebar,
  '/typeScriptNotes/': typeScriptNotesSidebar,
  '/miniProgramNotes/': miniProgramNotesSidebar,
  '/viteNotes/': viteNotesSidebar,
  '/httpNotes/': httpNotesSidebar,
  '/jetBrainsNotes/': jetBrainsNotesSidebar,
  '/eslintNotes/': eslintNotesSidebar,
  '/androidNotes/': androidNotesSidebar,
  '/vuepressNotes/': vuepressNotesSidebar,
  '/javaNotes': javaNotesSidebar,
  '/springBootNotes/': springBootNotesSidebar,
  '/mavenNotes/': mavenNotesSidebar,
  '/jsKnowledge/': jsKnowledgeSidebar,
  '/cssKnowledge/': cssKnowledgeSidebar,
  '/vueKnowledge/': vueKnowledgeSidebar,
  '/webpackKnowledge/': webpackKnowledgeSidebar,
  '/nodeKnowledge/': nodeKnowledgeSidebar,
  '/browserKnowledge/': browserKnowledgeSidebar,
  '/javaKnowledge/': javaKnowledgeSidebar,
  '/mybatisKnowledge/': mybatisKnowledgeSidebar,
  '/dataBaseKnowledge/': dataBaseKnowledgeSidebar
}
