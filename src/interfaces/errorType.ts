/* Set ErrorType according to an error use case:
 * Operated: used when an error occurred on an absolutely valid path. For example, when a resource expires on a user request, when a resource is not found, which is a valid case, etc. These errors don't count for alerts.
 *
 * External: used for errors caused by external registries or systems, so the internal team can't fix it alone.
 *
 * Additionally, if these errors (both operated and external) are sent to a mobile client, it should include a process code to display a clear and concise issue description to the user.
 *
 * Unoperated (default): used for all other errors.
 */
export enum ErrorType {
    Operated = 'operated',
    Unoperated = 'unoperated',
    External = 'external',
}
