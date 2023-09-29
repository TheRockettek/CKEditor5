/**
 * This data processor implementation uses GitHub Flavored Markdown as input/output data.
 *
 * See the {@glink features/markdown Markdown output} guide to learn more on how to enable it.
 */
export default class GFMDataProcessor {
    /**
     * Creates a new instance of the Markdown data processor class.
     */
    constructor(document: any);
    _htmlDP: HtmlDataProcessor;
    /**
     * Keeps the specified element in the output as HTML. This is useful if the editor contains
     * features producing HTML that is not a part of the Markdown standard.
     *
     * By default, all HTML tags are removed.
     *
     * @param element The element name to be kept.
     */
    keepHtml(element: any): void;
    /**
     * Converts the provided Markdown string to a view tree.
     *
     * @param data A Markdown string.
     * @returns The converted view element.
     */
    toView(data: any): import("ckeditor5/src/engine").ViewDocumentFragment;
    /**
     * Converts the provided {@link module:engine/view/documentfragment~DocumentFragment} to data format &mdash; in this
     * case to a Markdown string.
     *
     * @returns Markdown string.
     */
    toData(viewFragment: any): string;
    /**
     * Registers a {@link module:engine/view/matcher~MatcherPattern} for view elements whose content should be treated as raw data
     * and not processed during the conversion from Markdown to view elements.
     *
     * The raw data can be later accessed by a
     * {@link module:engine/view/element~Element#getCustomProperty custom property of a view element} called `"$rawContent"`.
     *
     * @param pattern The pattern matching all view elements whose content should
     * be treated as raw data.
     */
    registerRawContentMatcher(pattern: any): void;
    /**
     * This method does not have any effect on the data processor result. It exists for compatibility with the
     * {@link module:engine/dataprocessor/dataprocessor~DataProcessor `DataProcessor` interface}.
     */
    useFillerType(): void;
}
import { HtmlDataProcessor } from "@ckeditor/ckeditor5-engine";
