// ===== CASE STUDIES ENGINE =====
// Data-driven case studies. To add a new case, add an entry to CASES array below.
// Architecture supports future: search, filtering, featured cases, competency pages.

const CaseStudies = (() => {

    // ===== CASE DATA =====
    const CASES = [
        {
            meta: {
                title: "Building Project Management Function from Scratch",
                company: "Blackthorn.ai",
                summary: "Built core PM processes, prioritization and resource planning practices from scratch as the company's first Project Manager, enabling scalable delivery across multiple parallel AI and software projects.",
                competencies: ["PMO Foundations", "Delivery Management", "Resource Management", "Process Design", "Organizational Scaling", "Prioritization", "Stakeholder Management"],
                readingTime: "3 min",
                slug: "building-pm-function"
            },
            content: `## Context

**Company:** Blackthorn.ai

When I joined Blackthorn.ai, I became the company's first Project Manager. The company was growing quickly, running multiple AI and software projects simultaneously, but project management practices had not yet been established.

As the number of projects and stakeholders increased, the company needed consistent delivery processes, project prioritization, and resource planning.

## Challenge

- No established Project Management function.
- Multiple AI and software projects competing for the same engineering resources.
- Constant changes in client priorities.
- Need to introduce delivery processes without slowing down engineering teams.

## My Role

- Built core Project Management processes from scratch.
- Introduced project planning and prioritization practices.
- Balanced engineering capacity across multiple parallel projects.
- Adapted delivery processes to different project types and client expectations.
- Established a common way of working between engineering teams and clients.

## Result

- Project Management became a scalable function rather than ad-hoc coordination.
- Delivery became more predictable despite multiple parallel projects.
- The company successfully scaled its project portfolio while maintaining delivery quality.`
        },
        {
            meta: {
                title: "Translating Science into Software",
                company: "Blackthorn.ai",
                summary: "Bridged the gap between biotechnology researchers and engineering teams on a generative molecule design platform by restructuring one multidisciplinary team into three focused streams with coordination processes.",
                competencies: ["Business \u2194 Engineering Translation", "AI Project Delivery", "Organizational Design", "Cross-functional Leadership", "Complex Stakeholder Management"],
                readingTime: "3 min",
                slug: "translating-science-into-software"
            },
            content: `## Context

**Project:** Generative Molecule Design Platform

The project combined biotechnology research, machine learning, web development, and big data. The primary users were scientists, while the delivery team consisted of software engineers, ML engineers, and data specialists.

## Challenge

- Extremely complex scientific domain.
- Scientists and engineers spoke different "languages."
- One team covered three very different disciplines.
- High dependency between Web, ML, and Big Data workstreams.

## My Role

- Learned the business domain deeply enough to communicate effectively with scientific stakeholders.
- Translated scientific requirements into actionable work for engineering teams.
- Reorganized one multidisciplinary team into three focused streams.
- Designed coordination processes to manage dependencies between the teams.

## Result

- Improved communication between scientific and engineering stakeholders.
- Reduced delivery friction between technical disciplines.
- Allowed each team to optimize its own workflow while maintaining alignment.`
        },
        {
            meta: {
                title: "Choosing Transparency over Revenue",
                company: "Blackthorn.ai",
                summary: "Led a discovery phase that revealed critical technical debt, recommended postponing implementation despite commercial pressure, and maintained client trust that led to continued collaboration six months later.",
                competencies: ["Discovery Leadership", "Consulting Mindset", "Stakeholder Trust", "Product Thinking", "Technical Communication"],
                readingTime: "2 min",
                slug: "choosing-transparency-over-revenue"
            },
            content: `## Context

During a discovery phase for a client project, the team analyzed the existing product before starting implementation.

## Challenge

The discovery revealed:

- Significant technical debt.
- Architectural issues preventing future product growth.
- The client's requested solution would not solve the underlying problem.

Starting implementation immediately would have been commercially beneficial for the company but technically irresponsible.

## My Role

- Led the discovery process.
- Communicated difficult findings to the client.
- Recommended postponing implementation until technical debt was addressed.
- Proposed an alternative solution better aligned with long-term business goals.

## Result

The project did not start immediately.

Six months later, after resolving the technical debt, the client returned and continued working with the company.`
        },
        {
            meta: {
                title: "Restoring Stakeholder Trust After Internal Technical Conflict",
                company: "WeSoftYou",
                summary: "Resolved an internal conflict between engineers that occurred in front of a client by addressing both people and process \u2014 using 1:1s, facilitated discussions, RACI redesign and CTO involvement to restore confidence.",
                competencies: ["Stakeholder Management", "Conflict Resolution", "Leadership without Formal Authority", "Governance Design", "Trust Recovery", "Process Improvement"],
                readingTime: "3 min",
                slug: "restoring-stakeholder-trust"
            },
            content: `## Context

**Company:** WeSoftYou

During a technical meeting with the client, a Senior Developer publicly challenged the Tech Lead's decisions, undermining the Tech Lead's credibility in front of the customer. The Project Manager was not present because it was a technical discussion.

The incident created both an internal conflict and a risk of losing the client's confidence in the technical team.

## Challenge

- Damaged trust between the Senior Developer and the Tech Lead.
- Client witnessed disagreement within the engineering team.
- Unclear ownership during technical discussions increased the risk of similar situations recurring.

## My Role

- Learned about the issue through the team's Daily Stand-up.
- Conducted separate 1:1 meetings with both engineers to understand each perspective.
- Facilitated a joint discussion to resolve the conflict and align expectations.
- Updated the RACI matrix to clearly define ownership and responsibilities during technical communication with the client.
- Initiated involving the CTO in several subsequent customer meetings as an independent technical authority to restore confidence in the team while reinforcing the Tech Lead's credibility.

## Result

- The conflict was resolved without escalation or changes to the team.
- Client confidence in the technical leadership was restored.
- Communication ownership became explicit.
- Similar situations did not recur.`
        },
        {
            meta: {
                title: "Recovering Delivery After a Critical Dependency Failure",
                company: "GR8.Tech",
                summary: "Recovered a client delivery after a critical dependency became invalid by aligning stakeholders, reprioritizing resources and adapting project scope \u2014 all within contractual deadlines.",
                competencies: ["Stakeholder Management", "Delivery Recovery", "Decision Making Under Constraints", "Scope Negotiation", "Resource Management", "Cross-team Coordination", "Risk Response", "Delivery Planning Under Uncertainty"],
                readingTime: "4 min",
                slug: "recovering-delivery"
            },
            content: `## Context

**Company:** GR8.Tech

The project was a client-facing initiative with fixed contractual deadlines and budget constraints. During planning, the dependent Data Team confirmed that all required data already existed and matched the project's business requirements.

After implementation had already started, it became clear that this assumption was incorrect. The required data either did not exist or was calculated differently than expected, making the planned solution impossible.

## Challenge

- A critical dependency turned out to be invalid after development had already started.
- Every feasible implementation option increased both project duration and implementation effort by approximately three times.
- Multiple stakeholders had conflicting priorities:
  - Product Owner wanted to preserve business value.
  - Data Team had limited capacity.
  - Engineering Team required a technically feasible solution.
  - Client expected delivery within contractual commitments.
- Delaying the project would negatively impact the client relationship.

## My Role

- Assessed alternative implementation scenarios together with engineering and business stakeholders.
- Coordinated discussions between the Product Owner, Data Team and client to define the most valuable and realistic project scope.
- Reprioritized the engineering backlog to free additional development capacity without increasing team size.
- Negotiated revised delivery commitments with the client based on transparent communication and realistic implementation constraints.
- Ensured that all stakeholders aligned on a common delivery plan before execution continued.

## Result

- The project was successfully delivered within the agreed client deadline.
- The client remained satisfied with both the communication process and the final outcome.
- Stakeholders aligned on a revised scope that balanced business value, technical feasibility and available resources.
- Additional engineering capacity was secured through internal backlog reprioritization rather than expanding the team.
- Internal delivery costs increased due to the dependency issue, representing a deliberate business trade-off to fulfill contractual commitments and maintain customer satisfaction.`
        },
        {
            meta: {
                title: "Enabling AI Model Training Through Custom Dataset Collection",
                company: "Blackthorn.ai",
                summary: "Resolved a critical blocker for an AI project by researching equipment, organizing data collection sessions and enabling the ML team to validate a new training approach after the initial hypothesis failed.",
                competencies: ["Cross-functional Problem Solving", "AI Project Delivery", "Technical Coordination", "Research & Decision Making", "Resource Acquisition", "Ownership"],
                readingTime: "3 min",
                slug: "enabling-ai-model-training"
            },
            content: `## Context

**Company:** Blackthorn.ai

The team was developing an AI solution for ECG signal denoising using data collected from a compact ECG sensor. The initial approach aimed to improve signal quality without requiring additional data collection or external resources.

After experimentation, the first hypothesis proved ineffective and did not achieve the required denoising quality.

## Challenge

- The initial technical approach failed to deliver satisfactory results.
- The alternative solution required paired training data consisting of:
  - Clean ECG signals recorded with a professional medical-grade ECG device.
  - Noisy signals recorded simultaneously using the prototype ECG sensor.
- The team did not have access to a suitable professional ECG device or an existing dataset in a compatible format.
- Acquiring appropriate equipment and collecting synchronized data became a project blocker.

## My Role

- Worked with the engineering and ML team to understand the requirements for the new training approach.
- Researched available professional ECG devices that met both technical and budget constraints.
- Identified suitable equipment capable of producing data compatible with the project's processing pipeline.
- Organized and coordinated a dedicated data collection session using both ECG devices to create a synchronized training dataset.
- Enabled the ML team to continue experimentation with the new approach.

## Result

- The required paired training dataset was successfully collected.
- The new ML approach produced significantly better denoising results than the initial solution.
- The project was able to continue without redesigning the overall product approach.
- A major technical blocker was resolved through cross-functional coordination rather than additional engineering effort.`
        },
        {
            meta: {
                title: "Eliminating Uncontrolled Scope Changes Through Communication Governance",
                company: "Blackthorn.ai",
                summary: "Investigated delivery delays, discovered unauthorized scope changes being sent directly to developers, and designed a communication governance framework that restored predictability.",
                competencies: ["Root Cause Analysis", "Stakeholder Management", "Communication Governance", "Scope Management", "Process Design", "Delivery Predictability", "Requirements Management"],
                readingTime: "3 min",
                slug: "eliminating-scope-changes"
            },
            content: `## Context

**Company:** Blackthorn.ai

During one of my first projects as a Project Manager, our team was building a Data Warehouse and BI reports for a large media streaming platform.

One report significantly exceeded its planned delivery timeline, despite there being no officially approved scope changes.

## Challenge

- The report was consistently delayed without any visible reason.
- No additional work had been formally requested.
- The engineering team appeared to be continuously implementing new changes.
- Delivery predictability was decreasing.

## My Role

- Investigated the root cause of the delivery delays instead of treating the issue as an estimation problem.
- Discovered that multiple client representatives were sending implementation requests directly to the developer through private messages.
- Identified that these requests were often contradictory and had never been formally reviewed or approved.
- Established a clear communication plan defining:
  - Authorized decision-makers on the client's side.
  - A single point of contact for requirements.
  - Approved communication channels.
  - A structured requirements collection process.
- Communicated and aligned the new working agreement with all stakeholders.

## Result

- The delayed report was successfully completed.
- Uncontrolled scope changes were eliminated.
- Requirements became transparent and traceable.
- Delivery became significantly more predictable for the remainder of the project.
- Engineers were protected from conflicting requests and informal scope expansion.`
        },
        {
            meta: {
                title: "Resolving a Cross-Department Resource Bottleneck",
                company: "GR8.Tech",
                summary: "Unblocked a project dependency by analyzing another department's workload, identifying tasks my team could absorb, and freeing their capacity to complete the critical work \u2014 without adding headcount.",
                competencies: ["Cross-functional Leadership", "Systems Thinking", "Resource Optimization", "Delivery Planning", "Dependency Management", "Organizational Problem Solving", "Stakeholder Management"],
                readingTime: "3 min",
                slug: "cross-department-resource-bottleneck"
            },
            content: `## Context

**Company:** GR8.Tech

I managed a cross-department project that depended on work being completed by another department before my teams could begin implementation.

The dependency had been identified as a project risk from the start. However, the other department had no available capacity for several months, and only they possessed the required domain expertise to complete their part of the work.

Waiting for capacity would have delayed the entire project.

## Challenge

- Critical dependency on another department.
- No available capacity for several months.
- Work could not simply be reassigned because of domain-specific knowledge.
- The project had committed delivery deadlines.

## My Role

- Analyzed the workload of the dependent department instead of accepting the resource constraint as unavoidable.
- Identified tasks within their backlog that could be completed by my own engineering team.
- Coordinated the temporary redistribution of work between departments.
- Freed up the dependent team's capacity to focus on the critical work required for my project.
- Managed stakeholder alignment throughout the cross-department collaboration.

## Result

- The dependency was completed without waiting for additional capacity.
- The project was delivered on time.
- Cross-department collaboration improved through more effective resource utilization.
- Delivery risk was mitigated without increasing headcount or reducing project scope.`
        },
        {
            meta: {
                title: "Maintaining Stakeholder Trust During a Long-Term AI Research Project",
                company: "Blackthorn.ai",
                summary: "Managed a two-year reinforcement learning research project through multiple hypothesis iterations, maintaining client trust and transparency despite genuine technical uncertainty and no guaranteed outcome.",
                competencies: ["AI Project Delivery", "R&D Project Coordination", "Stakeholder Communication", "Managing Technical Uncertainty", "Expectation Management", "Transparent Delivery", "Cross-functional Collaboration"],
                readingTime: "3 min",
                slug: "maintaining-stakeholder-trust-ai-research"
            },
            content: `## Context

**Company:** Blackthorn.ai

One of the first AI projects I managed was a reinforcement learning-based trading platform focused on real-time strategy optimization and automated signal generation.

The project was research-oriented, meaning there was no guarantee that a technically viable solution could be achieved. Over nearly two years, multiple research hypotheses were explored and the project expanded several times as new directions were investigated.

## Challenge

- The project operated under genuine research uncertainty.
- Success depended on validating research hypotheses rather than implementing predefined functionality.
- Progress was often difficult to measure using traditional software delivery metrics.
- The client needed continuous visibility into research progress despite the uncertainty of the final outcome.

## My Role

- Managed day-to-day project delivery throughout multiple research iterations.
- Ensured transparent communication of research progress, technical findings and project risks.
- Regularly reminded stakeholders that the project's purpose was research and validation rather than guaranteed implementation.
- Helped maintain realistic expectations by communicating both progress and limitations as new evidence emerged.
- Supported the CEO in maintaining a long-term, trust-based relationship with the client through consistent project transparency.

## Result

- The research ultimately demonstrated that the proposed approach was not technically feasible with the available methods.
- The client accepted the outcome because expectations had been managed transparently throughout the project.
- The company maintained a positive relationship with the client despite the absence of a production-ready solution.
- The client fully paid for the completed research work and had expanded the project several times during its lifecycle.`
        },
        {
            meta: {
                title: "Scaling Delivery Capacity to Meet a Critical Migration Deadline",
                company: "Blackthorn.ai",
                summary: "Scaled an engineering team from 3 to 11 contributors within weeks after the implementation approach failed, coordinating cross-project resource reallocation to meet a fixed contractual deadline.",
                competencies: ["Resource Management", "Delivery Recovery", "Capacity Planning", "Cross-project Prioritization", "Stakeholder Negotiation", "Organizational Coordination", "Crisis Delivery Management"],
                readingTime: "3 min",
                slug: "scaling-delivery-capacity"
            },
            content: `## Context

**Company:** Blackthorn.ai

The project involved migrating approximately one hundred data processing jobs from a legacy platform to a new, more cost-effective solution. The migration had a fixed deadline because the client planned to discontinue the expensive legacy platform. Missing the deadline would have forced the client to extend the old license, putting both the project's commercial success and client payment at risk.

Just two to three weeks before the deadline, the team discovered that the chosen implementation approach was fundamentally flawed, making most of the completed work unusable.

## Challenge

- Most of the previous implementation could not be reused.
- Only a few weeks remained before a fixed contractual deadline.
- Failure would have resulted in significant additional costs for the client and jeopardized project payment.
- The engineering team had to dramatically increase delivery capacity within days rather than months.

## My Role

- Supported rapid replanning after the technical approach was changed.
- Identified and secured additional engineering capacity from other internal projects.
- Negotiated reprioritization with multiple project stakeholders whose roadmaps were affected by resource reallocation.
- Coordinated recruitment of additional short-term contributors from the university community to further expand delivery capacity.
- Scaled the engineering team from approximately three to eleven contributors within a very short period.
- Coordinated resource allocation and cross-project planning to support the accelerated delivery effort.

## Result

- The project was delivered within the contractual deadline.
- The client successfully migrated away from the legacy platform without extending the expensive license.
- The company received full project payment.
- The successful delivery led to continued collaboration on the project.`
        }
    ];

    // ===== RENDERING ENGINE =====

    // Convert markdown content to HTML
    function markdownToHtml(markdown) {
        let html = markdown;

        // Headers
        html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
        html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');

        // Bold
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

        // Split into blocks by double newlines
        const blocks = html.split(/\n\n+/);
        const processedBlocks = [];

        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i].trim();

            if (block.startsWith('<h2>') || block.startsWith('<h3>')) {
                processedBlocks.push(block);
            } else if (block.startsWith('- ')) {
                // Unordered list
                const lines = block.split('\n');
                let listHtml = '<ul>';
                for (const line of lines) {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('- ')) {
                        listHtml += `<li>${trimmed.substring(2)}</li>`;
                    } else if (trimmed.startsWith('  - ')) {
                        listHtml += `<li style="margin-left: 1.5rem;">${trimmed.substring(4)}</li>`;
                    }
                }
                listHtml += '</ul>';
                processedBlocks.push(listHtml);
            } else if (block.length > 0) {
                processedBlocks.push(`<p>${block.replace(/\n/g, '<br>')}</p>`);
            }
        }

        return processedBlocks.join('\n');
    }

    // Get all cases
    function getAllCases() {
        return CASES;
    }

    // Find case by slug
    function findBySlug(slug) {
        return CASES.find(c => c.meta.slug === slug) || null;
    }

    // Render a case card
    function renderCard(caseData) {
        const { meta } = caseData;
        const competencyTags = (meta.competencies || [])
            .slice(0, 4)
            .map(c => `<span class="case-tag">${c}</span>`)
            .join('');

        // Determine path prefix based on current page location
        const path = window.location.pathname;
        const prefix = path.includes('/case-studies/') ? '' : 'case-studies/';

        return `
            <article class="case-card card">
                <div class="case-card-header">
                    <span class="case-card-company">${meta.company || ''}</span>
                    <span class="case-card-time">${meta.readingTime || ''}</span>
                </div>
                <h3 class="case-card-title">${meta.title || ''}</h3>
                <p class="case-card-summary">${meta.summary || ''}</p>
                <div class="case-card-tags">${competencyTags}</div>
                <a href="${prefix}case.html?slug=${meta.slug}" class="case-card-link">
                    Read Case <span aria-hidden="true">&rarr;</span>
                </a>
            </article>
        `;
    }

    // Render all cards into a container
    function renderCards(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const cases = getAllCases();

        if (cases.length === 0) {
            container.innerHTML = '<p>No case studies available.</p>';
            return;
        }

        container.innerHTML = cases.map(renderCard).join('');
    }

    // Render a single case page
    function renderCasePage(contentId) {
        const container = document.getElementById(contentId);
        if (!container) return;

        // Get slug from URL
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('slug');

        if (!slug) {
            container.innerHTML = '<p>Case study not found.</p>';
            return;
        }

        const caseData = findBySlug(slug);

        if (!caseData) {
            container.innerHTML = '<p>Case study not found.</p>';
            return;
        }

        const { meta, content } = caseData;
        const htmlContent = markdownToHtml(content);
        const competencyTags = (meta.competencies || [])
            .map(c => `<span class="case-tag">${c}</span>`)
            .join('');

        // Update page title
        document.title = `${meta.title} \u2014 Viktoriia Zaremba`;

        // Determine back link path
        const path = window.location.pathname;
        const backLink = path.includes('/case-studies/') ? '../case-studies.html' : 'case-studies.html';
        const contactLink = path.includes('/case-studies/') ? '../index.html#contact' : 'index.html#contact';

        container.innerHTML = `
            <div class="case-page-header">
                <a href="${backLink}" class="case-back-link">&larr; All Case Studies</a>
                <div class="case-page-meta">
                    <span class="case-card-company">${meta.company || ''}</span>
                    <span class="case-card-time">${meta.readingTime || ''} read</span>
                </div>
                <h1>${meta.title}</h1>
                <p class="case-page-summary">${meta.summary || ''}</p>
            </div>
            <div class="case-page-body">
                ${htmlContent}
            </div>
            <div class="case-page-competencies">
                <h2>Competencies Demonstrated</h2>
                <div class="case-card-tags">${competencyTags}</div>
            </div>
            <div class="case-page-nav">
                <a href="${backLink}" class="btn btn-secondary">&larr; All Case Studies</a>
                <a href="${contactLink}" class="btn btn-primary">Get In Touch</a>
            </div>
        `;
    }

    return {
        getAllCases,
        findBySlug,
        renderCards,
        renderCasePage,
        markdownToHtml
    };
})();
