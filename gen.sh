#!/bin/bash

# Arrays of page data (filename|title|desc|hero|sub|color|icon)
pages=(
"asce-7-standards.html|ASCE 7 Wind Load Standards Guide - 7-22, 7-16, 7-10|Comprehensive guide to ASCE 7 wind load standards including ASCE 7-22, ASCE 7-16, and ASCE 7-10.|ASCE 7 Standards Guide|Understanding wind load standards from ASCE 7-10 through ASCE 7-22|#0018ff|fa-book"
"resources.html|Free Wind Load Resources & Tools|Download free wind load calculation guides, checklists, reference tables, Excel templates, and educational materials.|Free Resources & Tools|Downloadable guides, checklists, and educational materials|#10b981|fa-download"
"articles.html|Wind Load Engineering Articles & Guides|In-depth articles, case studies, and educational content covering wind load engineering topics.|Articles & Guides|Expert insights and educational content on wind load engineering|#f97316|fa-newspaper"
"about.html|About Wind Load Solutions - Since 2002|Learn about Wind Load Solutions' 24+ years of experience providing wind load engineering resources.|About Wind Load Solutions|Your trusted source for wind load engineering since 2002|#06b6d4|fa-info-circle"
"contact.html|Contact Wind Load Solutions|Contact Wind Load Solutions for wind load calculations, PE services, technical support, or questions.|Contact Us|Get in touch with our wind load engineering experts|#a855f7|fa-envelope"
)

for page_data in "${pages[@]}"; do
  IFS='|' read -r filename title desc hero sub color icon <<< "$page_data"
  echo "Creating $filename..."
done

