export interface Document {
  id: string
  title: string
  summary: string
  url: string
  type?: string
}

export const documents: Document[] = [
  {
    id: '1',
    
    title: 'RBG MOL Review (Nov 2025)',
    summary: 'RBG MOL Review document from November 2025. This simply shows that the site is not Metropolitan Open Land',
    url: '/documents/RBG_MOL_REVIEW.pdf',
    type: 'pdf',
  },
  {
    id: '2',
    title: 'Derreb Vs BCER May 2017',
    summary: 'This concerns the rights of access, and concludes that all vehicle access will be to the east, and that only pedestrians, cycles and mobility scooters may exit via Cator Estate. This document     also states that the restrictv=ive covenants for only detached houses is obsolete. See section 135 on page 26',
    url: '/documents/Derreb Vs BCER May 2017.pdf',
    type: 'pdf',
  },
  {
    id: '3',
    title: 'Planning Application and Appeal 2010',
    summary: 'In 2010, there was an application to build on the land, 10/2706/F. It was refused. This is the refusal, due to access from the west', 
    url: '/documents/10_2706_F-DECISION_NOTICE-567752.pdf',
    type: 'pdf',
  },
  {
    id: '4',
    title: 'Planning and Appeal 2015', 
    summary: 'In 2015, the last application 15/2819/F was refused because there was not enough affordable housing', 
    url: '/documents/15/15/00110/00110_DECISION_NOTICE.pdf',
    type: 'pdf',
  }
]
